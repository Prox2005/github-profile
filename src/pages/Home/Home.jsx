import "./home.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData, addRepos } from "../../features/userSlice/userSlice";
import Box from "../../components/Box/Box";
import Repository from "../../components/Repository/Repository";
import { Link } from "react-router-dom";

const Home = () => {
  const user = useSelector((state) => state.user.value.userData);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let username;
    const form = new FormData(e.target);
    const profile = form.get("profile");

    await fetch(`https://api.github.com/users/${profile}`).then((response) =>
      response.json().then((githubProfileData) => {
        const { avatar_url, login, followers, following, public_repos } = githubProfileData;
        username = login;
        dispatch(
          updateUserData({
            img: avatar_url,
            username: login,
            followers: followers,
            following: following,
            reposNumber: public_repos,
            repos: [],
          })
        );
      })
    );

    await fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((repository) => {
        repository.forEach((repositoryData) => {
          const { name, html_url, watchers, forks } = repositoryData;
          dispatch(addRepos({ name, url: html_url, watchers, forks }));
        });
      });
  };

  return (
    <main className="home">
      <form className="home__form" onSubmit={handleSubmit}>
        <input type="text" name="profile" placeholder="Search Github Profile" required />
        <button type="submit">
          <AiOutlineSearch size={25} color="white" />
        </button>
      </form>
      <article className="home__results">
        {!user?.username ? (
          <p className="home__results-empty">Please Provide a Github Profile</p>
        ) : (
          <>
            <section className="home__results-stats">
              <section className="home__results-stats__profile">
                <img src={user.img} alt="avatar" />
                <h2>{user.username}</h2>
              </section>
              <section className="home__results-stats__boxes">
                <Box data={"Followers"} value={user.followers} />
                <Box data={"Following"} value={user.following} />
                <Box data={"Repos"} value={user.reposNumber} />
              </section>
            </section>
            <section className="home__results-repositories">
              {user.repos.slice(0, 4).map((repository, key) => (
                <Repository
                  key={key}
                  name={repository.name}
                  url={repository.url}
                  watchers={repository.watchers}
                  forks={repository.forks}
                />
              ))}
            </section>
            <Link className="home__results-link" to={`repositories/${user.username}`}>
              More Repositories
            </Link>
          </>
        )}
      </article>
    </main>
  );
};

export default Home;
