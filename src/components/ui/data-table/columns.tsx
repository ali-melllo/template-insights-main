"use client"

import { Badge } from "@/components/Badge"
import { ProgressCircle } from "@/components/ProgressCircle"
import { ColumnDef, createColumnHelper } from "@tanstack/react-table"
import { ButtonTicketGeneration } from "./ButtonTicketGeneration"
import { DataTableColumnHeader } from "./DataTableColumnHeader"

const columnHelper = createColumnHelper<any>()

export const columns = [
  columnHelper.accessor("order_date", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Order Date" />
    ),
    enableSorting: true,
    meta: {
      className: "text-left",
      displayName: "Order Date",
    },
    cell: ({ row }) => (
      <span className="tabular-nums text-gray-900 dark:text-gray-50">
        {new Date(row.original.order_date).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}
      </span>
    ),
  }),
  columnHelper.accessor("customer_name", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer" />
    ),
    enableSorting: true,
    meta: {
      className: "text-left",
      displayName: "Customer",
    },
    cell: ({ row }) => (
      <div className="flex flex-col gap-1">
        <span className="font-medium text-gray-900 dark:text-gray-50">
          {row.original.customer_name}
        </span>
        <div className="flex items-center gap-1 text-xs">
          <span className="text-gray-500 dark:text-gray-500">Order ID:</span>
          <span className="font-mono font-medium uppercase tabular-nums text-gray-900 dark:text-gray-50">
            {row.original.order_id}
          </span>
        </div>
      </div>
    ),
  }),
  columnHelper.accessor("delivery_date", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Delivery Date" />
    ),
    enableSorting: true,
    meta: {
      className: "text-left",
      displayName: "Delivery Date",
    },
    cell: ({ row }) => (
      <span className="tabular-nums text-gray-900 dark:text-gray-50">
        {new Date(row.original.delivery_date).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}
      </span>
    ),
  }),
  columnHelper.accessor("product", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Product" />
    ),
    enableSorting: true,
    meta: {
      className: "text-left",
      displayName: "Product",
    },
    cell: ({ row }) => (
      <span className="text-gray-900 dark:text-gray-50">
        {row.original.product}
      </span>
    ),
  }),
  columnHelper.accessor("quantity", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quantity" />
    ),
    enableSorting: true,
    meta: {
      className: "text-left",
      displayName: "Quantity",
    },
    cell: ({ row }) => (
      <span className="font-medium text-gray-900 dark:text-gray-50">
        {new Intl.NumberFormat().format(row.original.quantity)}
      </span>
    ),
  }),
  columnHelper.accessor("total_price", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Total Price" />
    ),
    enableSorting: true,
    meta: {
      className: "text-left",
      displayName: "Total Price",
    },
    cell: ({ row }) => (
      <span className="font-medium text-gray-900 dark:text-gray-50">
        ${new Intl.NumberFormat().format(row.original.total_price)}
      </span>
    ),
  }),
  columnHelper.accessor("progress", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Progress" />
    ),
    enableSorting: false,
    meta: {
      className: "text-left",
      displayName: "Progress",
    },
    cell: ({ row }) => {
      return (
        <ProgressCircle
          value={row.original.progress}
          radius={14}
          strokeWidth={3}
          variant={
            row.original.progress >= 85
              ? "success"
              : row.original.progress >= 60
              ? "warning"
              : "default"
          }
        >
          <span className="text-[11px] font-semibold ml-9 ">
            {row.original.progress}%
          </span>
        </ProgressCircle>
      )
    },
  }),
  columnHelper.accessor("status", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    enableSorting: true,
    meta: {
      className: "text-left",
      displayName: "Status",
    },
    cell: ({ row }) => {
      return (
        <Badge
          variant={
            row.original.status === "Delivered"
              ? "success"
              : row.original.status === "In Progress"
              ? "warning"
              : "default"
          }
        >
          {row.original.status}
        </Badge>
      )
    },
  }),
  columnHelper.accessor("ticket_generation", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Actions" />
    ),
    enableSorting: false,
    meta: {
      className: "text-left",
      displayName: "Actions",
    },
    cell: ({ row }) => (
      <ButtonTicketGeneration initalState={row.original.ticket_generation} />
    ),
  }),
] as ColumnDef<any>[];
