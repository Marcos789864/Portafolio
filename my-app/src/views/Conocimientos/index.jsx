import Sql from '../../imgs/server.svg'
import Full from '../../imgs/full-stack.svg'
import UI from '../../imgs/uiux.svg'
import Web from '../../imgs/web-programming.svg'

const Conocimientos = () =>
{
    return(
       <>
        <h1>Conocimientos</h1>

        <div className='ContainerCentrado'>
            <div>
            <img src= {Sql} className='ResolucionImg' alt='sql'></img>
            <h2>Sql</h2>
            </div>
            <div>
            <img src={Full} className='ResolucionImg' alt='full' ></img>
            <h2>Full</h2>
            </div>
            <div>
            <img src={UI} className='ResolucionImg'alt='ui'></img>
            <h2>Ui</h2>
            </div>
           
        </div>
       </>   
    )
    
}

export default Conocimientos  