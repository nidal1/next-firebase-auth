import Layout from '../components/Layout';
import { Context } from '../Firebase/client/AuthReducer';
import { useContext } from 'react';
import { checkingAuth } from '../utilities';


const Dashbord = () => {
    const { state } = useContext(Context);
    console.log('Auth user: ', state.authUser);

    return (
        <Layout>
            <h2>Dashbord</h2>
        </Layout>
    )
};

export const getServerSideProps = async (ctx) => {
    return checkingAuth(ctx, 'is_equal_to', '/login')
}
export default Dashbord;