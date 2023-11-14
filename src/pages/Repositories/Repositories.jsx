import "./repositories.css";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineRollback } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Repository from "../../components/Repository/Repository";

const Profile = () => {
  const dispatch = useDispatch();
  const repositories = useSelector((state) => state.user.value.userData.repos);
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/");
  };

  return (
    <article className="repositories">
      <header className="repositories-header">
        <AiOutlineRollback
          className="repositories-btn"
          onClick={handleReturn}
          cursor={"pointer"}
          size={25}
        />
        <h1>Repositories</h1>
      </header>
      <section className="repositories-container">
        {repositories.map((repository, key) => (
          <Repository
            key={key}
            name={repository.name}
            url={repository.url}
            watchers={repository.watchers}
            forks={repository.forks}
          />
        ))}
      </section>
    </article>
  );
};

export default Profile;
