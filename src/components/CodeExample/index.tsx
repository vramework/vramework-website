import React from "react"
import CodeBlock from '@theme/CodeBlock';
import Heading from '@theme/Heading';
import Link from "@docusaurus/Link";

const code = `
interface Car {
  id: string
  licensePlate: string
  color: string
}

const updateCar: APIFunction<Car, void> = async (services: Services, { id, ...data }: Car, session: UserSession) => {
    try {
        await services.database
            .updateTable('car')
            .setValues({
                ...car,
                updatedBy: session.userId,
            })
            .where('id', '=', id)
            .executeTakeFirstOrThrow()
    } catch (e: any) {
       // Could fail for other reasons, but we're only handling not found
       throw new NotFoundError()
    }
}

const routes: [{
    type: 'post',
    route: '/card/:id',
    schema: 'Car',
    func: updateCar,
}]
`

export default function CodeExample(): JSX.Element {
    return <div className="max-w-screen-lg mx-auto">
        <Heading as="h2" className="text-4xl text-center">Example Code</Heading>
        <p className="text-lg text-center font-medium">
            A simple crud operation
        </p>
        <div className="flex flex-col justify-center items-center">
            <p className="italic">
                *There's a little bit more to it, take a look at  <Link
                    to="/docs/intro">
                    the documentation
                </Link> to see the full example.
            </p>
        </div>
        <CodeBlock language="typescript">
            {code}
        </CodeBlock>
    </div>
}