import styled from "styled-components";
const Wrapper = styled.section`
    .background {
        margin-top: 0px;
        background-image: linear-gradient(
                160deg,
                var(--primary-300) 50%,
                var(--purple-300) 100%
        );
        height: fit-content;
    }

    .login-background {
        margin-top: 0px;
        background-image: linear-gradient(
                160deg,
                var(--primary-300) 50%,
                var(--purple-300) 100%
        );
        height: 100vh;
    }

    .login-background::before {
        background: rgba(0, 0, 0, 0.3)
    }

    .logo {
        display: block;
        margin: 0 auto;
        margin-bottom: 2rem;
    }

    .form {
        margin-top: 0px;
        margin-bottom: 0px;
        max-width: 400px;
        width: 90vw;
        background: none;
        box-shadow: none;
    }

    .form-input {
        padding: 5px;
    }

    .login-form {
        margin-top: 0px;
        max-width: 350px;
        background: white;
        padding: 10px;
        margin: auto;
        border-radius: 8px;
    }

    .login-form input {
        background: none;
        margin: 5px 0px 5px 0px;
        padding: 5px;
        font-size: 14px;
        border-radius: 8px;
    }

    h4,
    h2 {
        text-align: center;
        margin-bottom: 1.38rem;
        font-weight: 800;
    }

    p {
        margin-top: 1rem;
        text-align: center;
        line-height: 1.5;
        margin-bottom: 1.38rem;
    }

    .register-text {
        text-align: center;
        color: var(--black);
        font-weight: 800;
    }

    .btn {
        display: block;
        margin-top: 1rem;
        margin: 0 auto;
        background-color: var(--purple-500);
    }

    .btn:hover {
        background-color: var(--purple-700);
    }

    .member-btn {
        color: var(--primary-700);
        letter-spacing: var(--letter-spacing);
        margin-left: 0.25rem;
        font-weight: 600;
    }

    .member-btn-register {
        color: var(--white);
        letter-spacing: var(--letter-spacing);
        margin-left: 0.25rem;
    }

    .login-heading {
        padding-top: 100px;
    }

    .spinner {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .spinner-circle {
        border-top-color: var(--white);
        width: 60px;
        height: 60px;
    }

    .spinner-wrapper {
        color: var(--white);
    }
`;
export default Wrapper;
