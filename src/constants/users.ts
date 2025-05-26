export const USERS = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    role: 'Admin',
    status: 'Active',
    joinDate: '2024-01-15',
    avatar: '/placeholder.svg?height=32&width=32',
  },
  {
    id: '2',
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    role: 'User',
    status: 'Active',
    joinDate: '2024-02-20',
    avatar: '/placeholder.svg?height=32&width=32',
  },
  {
    id: '3',
    name: 'Carol Davis',
    email: 'carol.davis@example.com',
    role: 'Moderator',
    status: 'Inactive',
    joinDate: '2024-01-08',
    avatar: '/placeholder.svg?height=32&width=32',
  },
  {
    id: '4',
    name: 'David Wilson',
    email: 'david.wilson@example.com',
    role: 'User',
    status: 'Active',
    joinDate: '2024-03-12',
    avatar: '/placeholder.svg?height=32&width=32',
  },
  {
    id: '5',
    name: 'Emma Brown',
    email: 'emma.brown@example.com',
    role: 'Admin',
    status: 'Active',
    joinDate: '2024-02-05',
    avatar: '/placeholder.svg?height=32&width=32',
  },
  {
    id: '6',
    name: 'Frank Miller',
    email: 'frank.miller@example.com',
    role: 'User',
    status: 'Pending',
    joinDate: '2024-03-25',
    avatar: '/placeholder.svg?height=32&width=32',
  },
  {
    id: '7',
    name: 'Grace Lee',
    email: 'grace.lee@example.com',
    role: 'Moderator',
    status: 'Active',
    joinDate: '2024-01-30',
    avatar: '/placeholder.svg?height=32&width=32',
  },
  {
    id: '8',
    name: 'Henry Taylor',
    email: 'henry.taylor@example.com',
    role: 'User',
    status: 'Inactive',
    joinDate: '2024-02-14',
    avatar: '/placeholder.svg?height=32&width=32',
  },
]

export const STATUS: Record<
  string,
  'default' | 'secondary' | 'destructive' | 'outline'
> = {
  Active: 'default',
  Inactive: 'secondary',
  Pending: 'outline',
}

export const ROLE = {
  Moderator: 'bg-blue-100 text-blue-800 hover:bg-blue-100',
  User: 'bg-green-100 text-green-800 hover:bg-green-100',
  Admin: 'bg-red-100 text-red-800 hover:bg-red-100',
}
