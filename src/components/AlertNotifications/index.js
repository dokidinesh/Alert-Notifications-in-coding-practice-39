// Write your code here

import {MdInfo, MdWarning} from 'react-icons/md'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => (
  <div className="app-container">
    <div className="responsive-container">
      <h1 className="heading">Alert Notifications</h1>
      <Notification>
        <AiFillCheckCircle className="success icon" />
        <div className="message-container">
          <h1 className="message-heading success">Success</h1>
          <p>You can access all the files in the folder</p>
        </div>
      </Notification>
      <Notification>
        <RiErrorWarningFill className="error icon" />
        <div className="message-container">
          <h1 className="message-heading error">Error</h1>
          <p>Sorry, you are not authorized to have access to delete the file</p>
        </div>
      </Notification>
      <Notification>
        <MdWarning className="warning icon" />
        <div className="message-container">
          <h1 className="message-heading warning">Warning</h1>
          <p>Viewers of this file can see comments and suggestions</p>
        </div>
      </Notification>
      <Notification>
        <MdInfo className="info icon" />
        <div className="message-container">
          <h1 className="message-heading info">Info</h1>
          <p className="description">
            Anyone on the internet can view these files
          </p>
        </div>
      </Notification>
    </div>
  </div>
)

export default AlertNotifications
