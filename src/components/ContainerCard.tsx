import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const ContainerCard = () => {
    return (
        <Card className="mt-36 w-[350px] h-fit text-zinc-100 bg-gradient-to-r from-red-400 to-green-400">
            <CardHeader>
                <CardTitle className="text-3xl">
                    Best day to buy a stock
                </CardTitle>
                {/* <CardDescription>...</CardDescription> */}
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <Label
                            htmlFor="picture"
                            className=" text-lg text-inherit"
                        >
                            Stock data
                        </Label>
                        <Input
                            id="picture"
                            type="file"
                            className="text-black"
                        />
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="default" className="bg-black">
                    Process
                </Button>
            </CardFooter>
        </Card>
    )
}

export default ContainerCard
