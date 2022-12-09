// @refresh reload
import {Suspense} from "solid-js";
import {
    A,
    Body,
    ErrorBoundary,
    Head,
    Html,
    Meta,
    Routes,
    Scripts,
    Title,
    FileRoutes
} from "solid-start";
import {Button} from "./components/button";
import {Counter} from "./components/counter";


export default function Root() {
    return (
        <Html lang="en">
            <Head>
                <Title>SolidStart - Bare</Title>
                <Meta charset="utf-8"/>
                <Meta content="width=device-width, initial-scale=1" name="viewport"/>
            </Head>
            <Body>
                <Suspense fallback={<div>Loading...</div>}>
                    <ErrorBoundary>
                        <Routes>
                            <FileRoutes/>
                        </Routes>
                        <Button intent={"primary"} onClick={() => console.log("Hello")}>Hello</Button>
                        <Counter/>
                    </ErrorBoundary>
                </Suspense>
                <Scripts/>
            </Body>
        </Html>
    );
}
