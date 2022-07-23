import { animation } from 'polished';
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
      --background:#E5E5E5;
      --red:#E62E4D;
      --blue: #5429cc;
      --green: #33CC95;
      --blue-light: #6933ff;

      --text-title: #363f5f;
      --text-body: #969c83;

      --shape: #FFFFFF;

    }


    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html{
        @media (max-width: 18888px){
         font-size: 93.75%; //15px
        }

        @media (max-width: 720px){
         font-size: 87.5%; //14px
        }
    }

    body{
        background: var(--background);
        --webkit-font-smoothing: antialiased;
        --ms-font-smoothing: antialiased;
    }

    border-style, button, input, textarea{
        font-family: 'Oswald', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, strong{
      font-weight: 700;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
    .react-modal-overflow{
        background: rgb(0,0,0,0.5);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        transition:   0.7s;
    }
    .react-modal-content{
        width:100%;
        max-width: 446px;
        padding: 2rem;
        background: var(--shape);

        position: relative;
        border-radius: 0.24rem;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    .submit{
            width: 100%;
            padding: 1.5rem;
            height: 4rem;
            margin-top: 1.5rem;
            border:0;

            background: var(--green);
            border-radius: 0%.25rem;
            font-weight: 400;

            color: var(--shape);

            display: flex;
            align-items: center;
            justify-content: center;

            font-size: 1rem;
            font-weight: 700;


            transition: filter ease 0.2s ;

            &:hover{
                filter:brightness(0.9);
            }



        }
        .react-modal-close{
                position: absolute;
                top: 1.5rem;
                right: 1.5rem;
                border: 0;
                background: transparent;

                cursor: pointer;
                transition: filter ease  0.2s;

                &:hover{
                    filter: brightness(0.8);

                }

                img{
                    width: 10px;
                    height: 10px;

                }
        }

        .animation{
            width: 9rem;
    height: 7rem;
    background: #ab5ff2;
    color: #FFFFFF;
    padding: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
        }
`;
