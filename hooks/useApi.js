import axios from "axios";
import { useState } from "react";

export default function useApi() {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const getUser = async (user) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${user}/repos`
      );
      if (response.status === 200) {
        setRepos([...reponse.data]);
      } else {
        setError("This user has no repository");
      }
    } catch (error) {
      setError("this is an error");
    }
  };

  return { repos, error, getUser };
}
