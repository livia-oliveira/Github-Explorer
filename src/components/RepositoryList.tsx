import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useEffect, useState } from "react";


export function RepositoryList(){

  interface Repository{
    name: string;
    description: string;
    html_url: string;
  }

    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
      fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    },[])

    return(
       <section className="repository-List">
        <h1>Lista de repositórios</h1>

        <ul>
            {repositories.map(repository => {
              return(
                <RepositoryItem key={repository.name} repository= {repository} />
              )
            })}
        </ul>

       </section>
    );
}