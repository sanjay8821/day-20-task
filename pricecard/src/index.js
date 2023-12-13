import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PriceTag from './components/PriceTag';
function Sample(props) {
let data = [
    
  {
    product:"FREE",
    price:'0',
    users:"Single User",
    usersEnabler:true,
    storage:"50GB Storage",
    storageEnabler:true,
    publicProjects:"Unlimited Public Projects",
    publicProjectsEnabler:true,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:false,
    phonesupport:"Dedicated Phone Support",
    phonesupportEnabler:false,
    subDomain:"Free Subdomain",
    subDomainEnabler:false,
    reports:"Monthly Status Reports",
    reportsEnabler:false
  },
  {
    product:"PLUS",
    price:'9',
    users:"5 User",
    usersEnabler:true,
    storage:"50GB Storage",
    storageEnabler:true,
    publicProjects:"Unlimited Public Projects",
    publicProjectsEnabler:true,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:true,
    phonesupport:"Dedicated Phone Support",
    phonesupportEnabler:true,
    subDomain:"Free Subdomain",
    subDomainEnabler:true,
    reports:"Monthly Status Reports",
    reportsEnabler:false
  }, 
  {
  product:"pro",
  price:'49',
  users:"Unlimited User",
  usersEnabler:true,
  storage:"50GB Storage",
  storageEnabler:true,
  publicProjects:"Unlimited Public Projects",
  publicProjectsEnabler:true,
  communityAccess:"Community Access",
  communityAccessEnabler:true,
  privateProjects:"Unlimited Private Projects",
  privateProjectsEnabler:true,
  phonesupport:"Dedicated Phone Support",
  phonesupportEnabler:true,
  subDomain:"Unlimited Free Subdomain",
  subDomainEnabler:true,
  reports:"Monthly Status Reports",
  reportsEnabler:true
}
]

return<>
    <section class="pricing py-5">
  <div class="container">
    <div class="row">
    <PriceTag type={data[0 ]}/>
    <PriceTag type={data[1]}/>
    <PriceTag type={data[2]}/>
    
 </div>
  </div>
</section>
    </>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>)

  