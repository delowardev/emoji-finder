import React from 'react'
import SearchResult from './SearchResult'
import Category from './Category'
import EmojiBlock from './EmojiBlock'
import CopyEmoji from './CopyEmojii'
import FontSize from './FontSize'
import Search from './Search'
import Sticky from 'react-stickynode'

const ContentArea = () => {
    return (
        <div className="content_area">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-2">
                        <Sticky top={30}>
                            <div className="sidebar">
                                <CopyEmoji />
                                <FontSize />
                                <Category />
                            </div>
                        </Sticky>
                    </div>
                    <div className="col-9">
                        <Search />
                        <SearchResult />
                        <EmojiBlock />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentArea