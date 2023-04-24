import React from 'react'

export const TodoTableHead: React.FC = () => {
  return (
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
            <th scope="col">Assigned</th>
            <th scope="col">Actions</th>
        </tr>
        </thead>
  )
}
