import React from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { getTopTrends } from "../../store/actions/trends.action"

const SideBar = () => {
  const dispatch = useDispatch()
  const { topTrends } = useSelector((state: any) => state.trends);
  React.useEffect(() => {
    dispatch(getTopTrends())
  }, [dispatch])

  console.log(topTrends);
  return (
    <div>SideBar</div>
  )
}

export default SideBar