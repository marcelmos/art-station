import Tabs from '../../components/widgets/Tabs/Tabs';
import './Inbox.css';

function Inbox(){

    const inboxTabs = {
        tabs: [
            { tabName: 'Inbox', dataType: 'Inbox' },
            { tabName: 'Sended', dataType: 'Sended messages' },
            { tabName: 'Templates', dataType: 'Template messages' },
            { tabName: 'Blocked', dataType: 'Blocked users message' },
            { tabName: 'Trash', dataType: 'Trash' }
        ]
    };

    return(
        <main>
            <section>
                <h2>Inbox</h2>

                <Tabs tabsData={inboxTabs}/>
            </section>
        </main>
    );
}

export default Inbox;