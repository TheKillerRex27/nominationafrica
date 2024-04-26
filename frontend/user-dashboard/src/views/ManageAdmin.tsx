import 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Alert from '../components/Alert'

function ManageAdmin() {
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

        <Alert />
      </div>
    </div>
  )
}

export default ManageAdmin