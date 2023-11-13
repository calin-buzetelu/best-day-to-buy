import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const ContainerCard = () => {
    return (
        <Card className="w-[350px] text-zinc-100 bg-gradient-to-r from-red-400    to-green-400">
            <CardHeader>
                <CardTitle>Best day to buy a stock</CardTitle>
                <CardDescription>...</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <Label htmlFor="picture" className="text-inherit">
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
