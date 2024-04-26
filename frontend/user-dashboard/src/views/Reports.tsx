import 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

function Reports() {
  return (
    <div>
      <div
        className="page-wrapper"
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin6"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        <Sidebar />
        <div className="body-wrapper">
          <Header />
        </div>
      </div>
    </div>
  )
}

export default Reports