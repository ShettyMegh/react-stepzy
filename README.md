# react-stepzy

A headless React library for building guided tours, walkthroughs, and onboarding experiences.

## Features

- 🎯 Spotlight effect to highlight target elements
- 💬 Customizable tooltips with flexible positioning
- 🎨 Fully customizable styling
- ⌨️ Keyboard navigation support
- 📱 Responsive and accessible

## Installation

```
npm install react-stepzy
```
## Quick Start
```ts
import { ReactStepzy } from 'react-stepzy';
import "react-stepzy/styles.css";

function App() {
    const stepzyRef = useRef<StepzyObjRef>(null);

    return (
        <ReactStepzy
            stepzyObjRef={stepzyRef}
            config={{ enabled: true }}
            steps={[
                {
                target: document.querySelector('#my-element'),
                content: 'This is step 1'
                },
                {
                target: document.querySelector('#my-element'),
                content: <CustomComponent />
                }
            ]}
        />
    );
}
```

## Styles

`react-stepzy` ships with minimal default styles for the spotlight and tooltip.

Import the stylesheet **once** in your application:

```ts
import "react-stepzy/styles.css";
```

```md
### Framework notes

- **Next.js (App Router)**: import the stylesheet in `app/layout.tsx`
- **Next.js (Pages Router)**: import it in `pages/_app.tsx`
- **Vite / CRA**: import it in your main entry file (e.g. `main.tsx`)
```
## API Reference

### ReactStepzy Props

- `steps: StepType[]` - Array of steps in the tour
- `config: StepzyConfig` - Configuration object
- `stepzyObjRef?: RefObject<StepzyObjRef>` - Ref to access controls programmatically

### StepzyConfig

- `enabled: boolean` - Enable/disable the tour
- `delay?: number` - Delay before showing each step
- `tooltipConfig?: { placement: 'top' | 'bottom' | 'left' | 'right' }`

### Controls API

Access controls via the ref:

stepzyRef.current?.controls.next();
stepzyRef.current?.controls.prev();
stepzyRef.current?.controls.close();
stepzyRef.current?.controls.goTo(2);## Examples

## Examples
Coming Soon

## Development

- Install dependencies: `npm install`
- Run playground: `npm run play`
- Run tests: `npm run test`
- Build: `npm run build`

## License

MIT
