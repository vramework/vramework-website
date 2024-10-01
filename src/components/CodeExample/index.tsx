import React from "react"
import CodeBlock from '@theme/CodeBlock';
import Heading from '@theme/Heading';
import Link from "@docusaurus/Link";

const code = `
interface Car {
  id: string
  ownerId: string
  licensePlate: string
  color: string
}

export type JustCarId = Pick<Car, 'id'>
export type UpdateCar = JustCarId & RequireAtLeastOne<Omit<Car, 'id'>

const updateCar: APIFunction<UpdateCar, void> = async (services, { id, ...data }, session) => {
    const oldData = await services.car.getCar(id)
    await services.car.updateCar(id, data)
    if (oldData.licensePlate !== data.licensePlate) {
        await services.email.sendLicenseChangedEmail(session.userEmail, id)
    }
}

const isCarOwner: APIPermission<JustCarId> = async (services, { id }, session) => {
    const { carOwner } = await services.car.getCar(id)
    return carOwner === session.userId
}

addRoute({
    // Route type
    method: 'post',
    // Route path
    route: '/car/:id',
    // The function to run when the route is hit
    func: updateCar,
    // Whether a session is required (optional, defaults to true)
    auth: true,
    // Permissions required to run this route, only one needs to pass
    permissions: {
        isCarOwner,
        isAdmin
    } 
})
`

export default function CodeExample(): JSX.Element {
    return <div className="max-w-full mx-auto px-4">
        <Heading as="h2" className="text-4xl text-center">Example Code</Heading>
        <p className="text-lg text-center font-medium">
            A simple crud operation
        </p>
        <div className="flex flex-col justify-center items-center">
            <p className="italic">
                *There's a bit more to it, take a look at  <Link
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