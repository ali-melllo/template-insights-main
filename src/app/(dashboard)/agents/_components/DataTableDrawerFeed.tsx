import { Label } from "@/components/Label"
import { Textarea } from "@/components/Textarea"
import { cx } from "@/lib/utils"
import { CircleCheck } from "lucide-react"
import Image from "next/image"

const activity = [
  {
    id: 1,
    type: "submitted",
    person: { name: "Emily Ross" },
    date: "2d ago",
    dateTime: "2024-07-13T10:32",
  },
  {
    id: 2,
    type: "added",
    person: { name: "Emily Ross" },
    date: "1d ago",
    dateTime: "2024-07-14T11:03",
  },
  {
    id: 3,
    type: "commented",
    person: {
      name: "Chelsea Hagon",
      imageUrl:
        "https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=1887&auto=format&fit=facearea&&facepad=2&w=256&h=256",
    },
    comment:
      'Re-classified expense from category "Consultation services" to "Coffee shop"',
    date: "3d ago",
    dateTime: "2023-01-23T15:56",
  },
  {
    id: 4,
    type: "approved",
    person: { name: "Maxime River" },
    date: "10min ago",
    dateTime: "2024-07-15T09:01",
  },
]

export function DataTableDrawerFeed() {
  return (
    <>
      <ul role="list" className="space-y-6">
        {activity.map((activityItem, activityItemindex) => (
          <li key={activityItem.id} className="relative flex gap-x-4">
            <div
              className={cx(
                activityItemindex === activity.length - 1 ? "h-6" : "-bottom-6",
                "absolute left-0 top-0 flex w-6 justify-center",
              )}
            >
              <span className="w-px bg-gray-200 dark:bg-gray-800" aria-hidden="true" />
            </div>
              <>
                <div className="relative flex size-6 flex-none items-center justify-center bg-white dark:bg-[#090E1A]">
                  {activityItemindex === activity.length - 1 ?
                    <div className="size-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300 dark:bg-[#090E1A] dark:ring-gray-700" />
                    :
                    <div className="relative flex size-6 flex-none items-center justify-center bg-white dark:bg-[#090E1A]">
                      <CircleCheck
                        className="size-5 text-blue-500 dark:text-blue-500"
                        aria-hidden="true"
                      />
                    </div>
                  }
                </div>
                <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500 dark:text-gray-500">
                  <span className="font-medium text-gray-900 dark:text-gray-50">
                    {activityItem.person.name}
                  </span>
                  {activityItem.type === "submitted" ? (
                    <> {activityItem.type} expense</>
                  ) : (
                    <> {activityItem.type} receipt to expense</>
                  )}
                </p>
                <time
                  dateTime={activityItem.dateTime}
                  className="flex-none py-0.5 text-xs leading-5 text-gray-500 dark:text-gray-500"
                >
                  {activityItem.date}
                </time>
              </>
          </li>
        ))}
      </ul>


      {/* <div className="flex gap-x-4">
        <form action="#" className="relative flex-auto">
          <Label htmlFor="comment" className="sr-only">
            Add your comment
          </Label>
          <Textarea
            id="comment"
            name="comment"
            rows={4}
            placeholder="Add your comment..."
          />
        </form>
      </div> */}
    </>
  )
}
