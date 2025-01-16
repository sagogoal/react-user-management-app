import { Login } from "@/components/pages/Login"
import { FC, memo } from "react"
import { Routes, Route } from "react-router-dom"
import { HomeRoutes } from "./HomeRoutes"
import { Page404 } from "@/components/pages/Page404";


export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {HomeRoutes.map((route) => (
        <Route 
          key={route.path} 
          path={`/home${route.path}`} 
          element={route.element} 
        />
      ))}
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
})