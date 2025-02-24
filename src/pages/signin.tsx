import { Input } from "../Components/ui/input";
import { Button } from "../Components/ui/Button";

export function SignIn () {
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">

        <div className="bg-white rounded-xl border min-w-48 p-8">
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <div className="flex justify-center pt-4">
            <Button loading = "false" variant="primary" title="Sign In" size="md" />
            </div>
        </div>
    </div>
}