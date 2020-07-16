import React from 'react';
import { FaTwitter, FaEnvelope, FaGithub } from 'react-icons/fa'

export default () => (
  <table>
    <tbody>
      <tr>
        <td>
          <FaGithub />
        </td>
        <td>
          <a target="_blank" rel="noreferrer" href="https://github.com/7coil">
            7coil
              </a>
        </td>
      </tr>
      <tr>
        <td>
          <FaTwitter />
        </td>
        <td>
          <a target="_blank" rel="noreferrer" href="https://twitter.com/sevencoil">
            sevencoil
              </a>
        </td>
      </tr>
      <tr>
        <td>
          <FaEnvelope />
        </td>
        <td>
          <a href="mailto:leondrolio@leondrolio.com">
            leondrolio@leondrolio.com
              </a>
        </td>
      </tr>
    </tbody>
  </table>
)
