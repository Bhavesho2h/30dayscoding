import React, { useContext } from "react";
import { Form } from "./Form";

export const Page = () => {
    return (
        <div className="formClass">
            <Form title="Welcome">
                <button>Sign Up</button>
                <button>Log In</button>
            </Form>
        </div>

    )
}

