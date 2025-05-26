import { ROLE, STATUS } from "@/constants/users"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Badge } from "../ui/badge"
import { TableBody, TableCell, TableRow } from "../ui/table"
import type { Users } from "@/types/Users"

type Props = {
  users: Users[]
}

const UsersTableBody = ({ users }: Props) => {
  return (
    <TableBody>
      {users.map((user, index) => (
        <TableRow
          key={user.id}
          className="border-b border-border transition-colors hover:bg-muted/50"
          style={{
            animationDelay: `${index * 50}ms`,
          }}
        >
          <TableCell className="py-4">
            <div className="flex items-center space-x-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                <AvatarFallback className="bg-primary/10 text-primary text-xs font-medium">
                  {user.name.split("", 1)}
                </AvatarFallback>
              </Avatar>
              <span className="font-medium text-foreground">{user.name}</span>
            </div>
          </TableCell>
          <TableCell className="text-muted-foreground">{user.email}</TableCell>
          <TableCell>
            <Badge className={ROLE[user.role as keyof typeof ROLE]}>{user.role}</Badge>
          </TableCell>
          <TableCell>
            <Badge variant={STATUS[user.status]}>{user.status}</Badge>
          </TableCell>
          <TableCell className="text-muted-foreground">{new Date(user.joinDate).toLocaleDateString()}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}

export { UsersTableBody }
