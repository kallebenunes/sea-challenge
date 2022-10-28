import { Button, Input } from 'antd'
import FormItemLabel from 'antd/es/form/FormItemLabel'
import React from 'react'

const ManipulateSector = () => {
    return (
        <div>
           <label>
            Setor
           <Input name='Setor' />
           </label>
           <label>
            Cargo
           <Input.Group>
           <Input name='Setor' />
           <Button>Adicionar</Button>
           </Input.Group>
           </label>
            
        </div>
    )
}
export default ManipulateSector