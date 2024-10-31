import Login from "@/components/Login"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function Auth() {
  return (
    <Tabs defaultValue="login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="Sign Up">Sign Up</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Login/>
      </TabsContent>
      <TabsContent value="Sign Up">
        <Card>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>
              Change your Sign Up here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current"> Sign Up</Label>
              <Input id="current" type="Sign Up" />
            </div>
            
          </CardContent>
          <CardFooter>
            <Button>Sign Up</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

