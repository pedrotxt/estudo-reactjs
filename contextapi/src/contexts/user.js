import { useState, createContext } from "react";

export const UserContext = createContext({});

// <UserContext.Provider> é apenas nosso Provider, ele que vai espalhar para nossos componentes o que tiver ali dentro do nosso value
function UserProvider({children}){
    // Trazendo nossos useState para cá
    const [alunos, setAlunos] = useState('Pedro');
    const [qtdAlunos, setQtdAlunos] = useState(85);
    
    return(
        <UserContext.Provider value={{ alunos, setAlunos, qtdAlunos }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;