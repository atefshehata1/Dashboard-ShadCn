import { Calendar, ChevronDown, ChevronUp, Home, Inbox, Plus, Projector, Search, Settings, User2 } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import Link from "next/link"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"


// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export  function AppSidebar() {

     
  return (
    <Sidebar collapsible="icon" >
          {/* Header  */}
        <SidebarHeader className="py-4">
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <div className="flex items-center gap-4">
              <Image
                src="/Logo.jpg"
                alt="User"
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
              <span className="font-semibold text-sm text-gray-800 dark:text-gray-200">
                Joe Doe
              </span>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
      <SidebarSeparator/>
    </SidebarHeader>

        {/* Content  */}

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  { item.title === "Inbox" && 
                  <SidebarMenuBadge> 24 </SidebarMenuBadge>
                  }
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

            {/* New Group  */}
        <SidebarGroup>
          <SidebarGroupLabel> Projects </SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <Projector/>
                    See All Projectors
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <Plus/>
                    Add Project
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
             {/* Collapsible  */}
            <Collapsible defaultOpen className="group/collapsible">
               <SidebarGroup>
          <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
              Collapsible Group
            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger>
             </SidebarGroupLabel>
             {/* Collapsible Content */}
             <CollapsibleContent>
              {/* Group Content  */}
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <Projector/>
                    See All Projectors
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <Plus/>
                    Add Project
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
             </CollapsibleContent>
        </SidebarGroup>
            </Collapsible>

            {/* Nested  */}

            <SidebarGroup>
          <SidebarGroupLabel> Nested  Items </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <Projector/>
                    See All Projectors
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                    <Link href='/#'>
                     <Plus/>
                     Add Project 
                    </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                    <Link href='/#'>
                     <Plus/>
                     Add Category
                    </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

      </SidebarContent>


      {/* Footer  */}

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
              <DropdownMenu>
                 <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <User2/> Joe Doe <ChevronUp className="ml-auto"/>
                  </SidebarMenuButton>
                 </DropdownMenuTrigger>
                 <DropdownMenuContent align="end">
                  <DropdownMenuItem> Profile </DropdownMenuItem>
                  <DropdownMenuItem> Setting </DropdownMenuItem>
                  <DropdownMenuItem variant="destructive"> Sign out </DropdownMenuItem>
                 </DropdownMenuContent>
              </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>

      </SidebarFooter>
    </Sidebar>
  )
}