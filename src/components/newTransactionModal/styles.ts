import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
    width: 100%;
    position: relative;

    display: flex;
    flex-direction: column;

    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.25rem;
        height: 3.5rem;
        border-radius: 0.25rem;
        color: var(--text-body);
        border: 1px solid #d7d7d7;
        background: #e7e9ee;
        outline: none;
        font-weight: 400;
        font-size: 1rem;

        transition: border ease-in-out 0.5s;

        & + input {
            margin-top: 1rem;
        }

        &::placeholder {
            color: var(--text-body);
        }

        &:focus {
            border-color: var(--green);
        }
    }

    div {
        margin: 1rem 0 1rem 0;

        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
    }
`;

interface RadiosBoxProps {
    isActive: boolean;
    activeColor: "green" | "red";
}

const colors = {
    red: "#E62E4D",
    green: "#33CC95"
}

export const RadioBox = styled.button<RadiosBoxProps>`
    width: 100%;
    padding: 0.25rem;
    height: 3rem;

    border: 1px solid #d7d7d7;
    background: ${(props) => (
        props.isActive ? transparentize(0.9,colors[props.activeColor])
        : "transparent"
        )};
    border-radius: 0.25rem;
    font-weight: 400;

    color: var(--text-title);

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    transition: ease 0.2s;

    img {
        width: 1.5rem;
        height: 1.5rem;
    }

    &:hover {
        border-color: ${darken(0.1, "#d7d7d7")};
    }
`;
