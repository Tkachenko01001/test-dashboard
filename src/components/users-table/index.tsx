import { USERS } from "@/constants/users"
import { Table, TableHead, TableHeader, TableRow } from "../ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { ChevronDown, ChevronUp, Users } from "lucide-react"
import { useState } from "react"
import type { SortOrder } from "@/types/SortOrder"
import { cn } from "@/lib/utils"
import { UsersTableBody } from "./UsersTableBody"

const UsersTable = () => {
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc")
  const [users, setUsers] = useState(USERS)

  const sortUsers = (order: SortOrder) => {
    const sorted = [...users].sort((a, b) =>
      order === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name),
    )
    setUsers(sorted)
  }

  const handleClickSort = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc"
    setSortOrder(newOrder)
    sortUsers(newOrder)
  }

  return (
    <Card className="relative overflow-hidden border-0 bg-card shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-3">
          <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
            <Users className="text-primary h-5 w-5" />
          </div>
          <div>
            <CardTitle className="text-xl font-bold text-card-foreground">Users Management</CardTitle>
            <p className="text-muted-foreground text-sm">{USERS.length} total users</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-border">
                <TableHead
                  className="cursor-pointer font-semibold transition-colors select-none hover:bg-muted/50"
                  onClick={handleClickSort}
                >
                  <div className="flex items-center space-x-2">
                    <span>Name</span>
                    <div className="flex flex-col">
                      <ChevronUp
                        className={cn(
                          "h-3 w-3 transition-colors",
                          sortOrder === "asc" ? "text-primary" : "text-muted-foreground",
                        )}
                      />
                      <ChevronDown
                        className={cn(
                          "-mt-1 h-3 w-3 transition-colors",
                          sortOrder === "desc" ? "text-primary" : "text-muted-foreground",
                        )}
                      />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="font-semibold">Email</TableHead>
                <TableHead className="font-semibold">Role</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
                <TableHead className="font-semibold">Join Date</TableHead>
              </TableRow>
            </TableHeader>
            <UsersTableBody users={users} />
          </Table>
        </div>
      </CardContent>
      <div className="from-primary/20 to-primary/5 absolute -top-4 -right-4 h-16 w-16 rounded-full bg-gradient-to-br blur-xl" />
    </Card>
  )
}

export { UsersTable }
