import { FC } from "react"
import styled from "styled-components"

interface ButtonProps {
    title: string;
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
}

const defaultProps: ButtonProps = {
    title: "Submit",
    backgroundColor: 'white',
    textColor: 'black',
    borderColor: 'white'
}

export const Button: FC<ButtonProps> = ({ title, backgroundColor, textColor, borderColor }) => {
    return (
        <GenericButton
            style=
            {{
                backgroundColor: backgroundColor,
                color: textColor,
                borderColor: borderColor
            }}
        >{title}
        </GenericButton>
    )
}

const GenericButton = styled.button`
padding:0.3rem;
`

Button.defaultProps = defaultProps;
