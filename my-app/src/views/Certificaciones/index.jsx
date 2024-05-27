
import Certificado from '../../imgs/sql_basic-certificate-_1_.png'
import Certificado2 from '../../imgs/sql_intermediate-certificate.png'

const Certificaciones = () =>
{
    return( 
        <>
        <h1>Certificados</h1>
        <div className='ContainerCentrado'>

        <img src = {Certificado} alt='Certificado' className='ResolucionCertificado'></img>

        <img src = {Certificado2} alt='Certificado' className='ResolucionCertificado'></img>
        </div>
        </>
        
    )
    
}

export default Certificaciones  