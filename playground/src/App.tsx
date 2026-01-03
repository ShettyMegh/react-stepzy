//@ts-nocheck
import { MyButton, ReactStepzy } from "../../src";

export function App() {
	return (
		<>
			<MyButton type="primary" />

			<ReactStepzy
				steps={[
					{
						target: document.querySelector(".my-button"),
						content: "slakdm",
					},
				]}
			/>
		</>
	);
}
