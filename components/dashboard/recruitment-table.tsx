"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Info } from "lucide-react"
import type { Recruitment } from "@/lib/api-utils"

interface RecruitmentTableProps {
  recruitments: Recruitment[]
  page: number
  limit: number
  onPageChange: (page: number) => void
}

export function RecruitmentTable({ recruitments, page = 1, limit = 10, onPageChange }: RecruitmentTableProps) {
  const router = useRouter()
  const [selectedRecruitment, setSelectedRecruitment] = useState<Recruitment | null>(null)

  // Format date to a more readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  // Handle view details click
  const handleViewDetails = (recruitment: Recruitment) => {
    setSelectedRecruitment(recruitment)
  }

  // Handle dialog close
  const handleCloseDialog = () => {
    setSelectedRecruitment(null)
  }

  // Handle pagination
  const handlePreviousPage = () => {
    if (page > 1) {
      onPageChange(page - 1)
    }
  }

  const handleNextPage = () => {
    onPageChange(page + 1)
  }

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Team</TableHead>
              <TableHead>Position</TableHead>
              <TableHead className="hidden md:table-cell">Start Date</TableHead>
              <TableHead className="hidden md:table-cell">End Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recruitments.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                  No recruitments found
                </TableCell>
              </TableRow>
            ) : (
              recruitments.map((recruitment) => (
                <TableRow key={recruitment.rec_id}>
                  <TableCell className="font-medium">{recruitment.team_name}</TableCell>
                  <TableCell>{recruitment.position_name}</TableCell>
                  <TableCell className="hidden md:table-cell">{formatDate(recruitment.start_date)}</TableCell>
                  <TableCell className="hidden md:table-cell">{formatDate(recruitment.end_date)}</TableCell>
                  <TableCell>
                    {recruitment.active ? (
                      <Badge variant="default" className="bg-green-500 hover:bg-green-600">
                        Active
                      </Badge>
                    ) : (
                      <Badge variant="outline">Inactive</Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" onClick={() => handleViewDetails(recruitment)}>
                      <Info className="h-4 w-4 mr-1" />
                      <span className="hidden sm:inline">Details</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-end space-x-2">
        <Button variant="outline" size="sm" onClick={handlePreviousPage} disabled={page <= 1}>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous Page</span>
        </Button>
        <div className="text-sm text-muted-foreground">Page {page}</div>
        <Button variant="outline" size="sm" onClick={handleNextPage}>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next Page</span>
        </Button>
      </div>

      {/* Details Dialog */}
      <Dialog open={!!selectedRecruitment} onOpenChange={handleCloseDialog}>
        {selectedRecruitment && (
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{selectedRecruitment.position_name}</DialogTitle>
              <DialogDescription>
                Team: {selectedRecruitment.team_name} | Active: {selectedRecruitment.active ? "Yes" : "No"} | Period:{" "}
                {formatDate(selectedRecruitment.start_date)} - {formatDate(selectedRecruitment.end_date)}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Job Description</h3>
              <div
                className="prose prose-sm max-w-none dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: selectedRecruitment.job_description }}
              />
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}
