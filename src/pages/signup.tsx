import { Input } from "../Components/ui/input";
import { Button } from "../Components/ui/Button";

export function SignUp () {
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">

        <div className="bg-white rounded-xl border min-w-48 p-8">
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <div className="flex justify-center pt-4">
            <Button loading = "true" variant="primary" title="Sign Up" size="md" />
            </div>
        </div>
    </div>
}