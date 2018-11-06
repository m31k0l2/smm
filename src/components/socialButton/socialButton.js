import React from "react"
import Button from "../button/button"

export const VkButton = ({action}) => (
    <div style={{fontSize: 12}}>
        <Button title="ВКонтакте" color="vk" icon="vk" size="small" action={action}/>
    </div>
)