import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { activateAccount } from "../../api/auth.api"

export function ActivateAccount() {
    const params = useParams()
    const navigate = useNavigate()

    useEffect( () => {
        const activar = async () => {
            const actived = await activateAccount(params)
            if( actived ) {
                navigate('/iniciar-sesion')
            } else {
                navigate('/')
            }
        }
        activar()
    }, [params, navigate] )

    return (
        <>
            <div className="page-loader"></div>
        </>
    )
}