import { useState } from 'react' // 1. 引入工具箱
import { Link } from '@remix-run/react'

export default function Header() {
  // 2. 安装一个“开关” (默认是关着的 false)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm relative">
      <nav className="max-w-7xl mx-auto px-4 sm:6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
              ZMXF
            </Link>
          </div>

          {/* 电脑上的菜单 (大屏幕才显示) */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
            <Link to="/posts" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">文章</Link>
            <Link to="/categories" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">分类</Link>
            <Link to="/tags" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">标签</Link>
            <Link to="/archive" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">归档</Link>
          </div>

          {/* 手机上的菜单按钮 (小屏幕才显示) */}
          <div className="sm:hidden flex items-center">
            <button
              type="button"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              // 3. 给按钮接上电线：点击它，就切换开关的状态
              onClick={() => setIsOpen(!isOpen)} 
              aria-label="打开菜单"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* 4. 隐藏的菜单面板：只有当“开关”打开(isOpen)时，这部分才会显示出来 */}
      {isOpen && (
        <div className="sm:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/posts" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800" onClick={() => setIsOpen(false)}>文章</Link>
            <Link to="/categories" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800" onClick={() => setIsOpen(false)}>分类</Link>
            <Link to="/tags" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800" onClick={() => setIsOpen(false)}>标签</Link>
            <Link to="/archive" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800" onClick={() => setIsOpen(false)}>归档</Link>
          </div>
        </div>
      )}
    </header>
  )
}