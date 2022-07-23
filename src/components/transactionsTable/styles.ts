import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    margin-top: 4rem;
`;
export const Content = styled.table`
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
        color: var(--text-body);
        font-weight: 500;
        padding: 1rem 2rem;
        text-align: left;
        line-height: 1.5rem;
    }

    td {
        color: var(--text-body);
        font-weight: 400;
        border: 0;
        padding: 1rem 2rem;
        text-align: left;
        background: var(--shape);
        border-radius: 0%.25rem;

        &:first-child{
            color: var(--text-title);
        }

        &.deposit{
            color: var(--green);
        }

        &.withdraw{
            color: var(--red);
        }
    }
`;
