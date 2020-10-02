import React from 'react';
import { Header, Segment, Input, Icon } from 'semantic-ui-react';

class MessagesHeader extends React.Component {
    render() {
        const { channelName, numUniqueUsers, handleSearchChange, searchLoading, isPrivateChannel, handleStar, isChannelStarred } = this.props;

        return (
            <Segment clearing>
                {/* channel title */}
                <Header
                    fluid="true"
                    as="h2"
                    floated="left"
                    className="messages__header"
                    style={{ marginBottom: 0 }}
                >
                    <span>
                        {channelName}
                        {!isPrivateChannel && (
                            <Icon
                                onClick={handleStar}
                                style={{ cursor: 'pointer', marginLeft: '0.2em' }}
                                name={isChannelStarred ? 'star' : 'star outline'}
                                color={isChannelStarred ? 'yellow' : 'black'}
                            />
                        )}
                    </span>
                    <Header.Subheader>{numUniqueUsers}</Header.Subheader>
                </Header>

                {/* channel search input */}
                <Header floated="right">
                    <Input
                        loading={searchLoading}
                        onChange={handleSearchChange}
                        size="mini"
                        icon="search"
                        name="searchTerm"
                        placeholder="Search Messages"
                    />
                </Header>
            </Segment>
        )
    }
}

export default MessagesHeader;