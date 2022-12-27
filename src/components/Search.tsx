type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

import { BsSearch } from "react-icons/bs";

const Search = ({ loadUser }: SearchProps) => {
  const;

  return (
    <div>
      <h2>Busque por um usuário:</h2>
      <p>Conheceça seus melhores repositórios</p>
      <div>
        <input type="text" placeholder="Digite o nome do usuário" />
        <button>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
