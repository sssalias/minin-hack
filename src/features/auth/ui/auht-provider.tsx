import { ReactKeycloakProvider } from '@react-keycloak/web'
import { authClient } from 'src/features/auth/api'

type Props = {
    children: React.ReactNode
}
const AuthProvider: React. FC<Props>= props => {    
    return (
        <ReactKeycloakProvider authClient={authClient}>
            {props.children}
        </ReactKeycloakProvider>
    )
}

export default AuthProvider