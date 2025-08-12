"use client"

import { useState, useEffect } from "react"
// ... (imports)

export default function TeamsPage() {
  // ... (component logic)

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Teams</h1>
            <p className="text-muted-foreground">All teams competing in the Secret Chel Society</p>
          </div>
          {/* ... rest of component */}
        </div>
      </motion.div>
    </div>
  )
}
