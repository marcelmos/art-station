import React from 'react';
import './Tabs.css';

class Tabs extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            tabsData: this.props.tabsData,
        }
    }


    render(){
        return(
            <div className="tab-wrapper">
                <div className="tab-buttons">
                    {this.state.tabsData.tabs.map((tab, index) => {
                        console.log(tab);
                        return <button onClick={this.addListener} id={'tab-'+(index+1)} className={(index === 0) ? 'active' : ''}>{tab.tabName}</button>;
                    })}
                </div>

                <div className="tab-content">

                    {this.state.tabsData.tabs.map((tabEl, index) => {
                        return(<div className={(index === 0) ? 'tab-content__element active' : 'tab-content__element'} id={'tab_content-'+(index+1)}>
                            <p>{tabEl.dataType}</p>
                        </div>);
                    })}
                </div>
            </div>
        );
    };

    addListener(e){

            document.querySelector('.tab-buttons .active').classList.remove('active');
            document.querySelectorAll('.tab-content .tab-content__element').forEach(el => {
                el.classList.remove('active');
            });

            document.querySelector(`.tab-buttons #${e.target.id}`).classList.add('active');
            document.querySelector(`.tab-content #tab_content-${e.target.id.substring(4)}`).classList.add('active');
    }
};

export default Tabs;