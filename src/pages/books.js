import React from "react"
import {GetBooks} from "../hooks/get-books"
import {GetBooksCovers} from "../hooks/get-books-covers"
import {GetBooksCategories} from "../hooks/get-books-categories"
import MediaCover from "../components/media-cover"
import MediaLibrary from "../components/media-library";

export default function Books() {
  const booksData = GetBooks()
  const booksCovers = GetBooksCovers()
  const booksCategories = GetBooksCategories();
  
  var books = {};
  
  for(var i = 0; i < booksData.allFile.edges.length; i++) {
    var bookData = booksData.allFile.edges[i].node.childMarkdownRemark;
    var bookCover = booksCovers.allFile.edges[i].node;

    //var version = bookData.frontmatter.version;
    var category = bookData.frontmatter.category;
    var volume = bookData.frontmatter.volume;

    var displayBookCover = (
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 330
        }}

        className="p-2"
      >
        <MediaCover categoryName={category.toLowerCase().replace(/ /g, "-")} title={bookData.frontmatter.title} synopsis={bookData.frontmatter.synopsis} cover={bookCover} showBadge={true} badgeItem={`Volume ${bookData.frontmatter.volume} Issue ${bookData.frontmatter.issue}`} slug={bookData.frontmatter.url === "" ? bookData.fields.slug : bookData.frontmatter.url} slugIsUrl={bookData.frontmatter.url != ""} playNowText="Read Now" />
      </div>
    )

    /*if(!(version in books)) {
      books[version] = {}
    }
    if(!(category in books[version])) {
      books[version][category] = []
    }
    if(!(volume in books[version][category])) {
      books[version][category][volume] = []
    }

    books[version][category][volume].push(displayBookCover)*/

    if(!(category in books)) {
      books[category] = []
    }
    if(!(volume in books[category])) {
      books[category][volume] = []
    }
    books[category][volume].push(displayBookCover)
  }

  return(
    <MediaLibrary pageID="books" title="Books" description="Read Au-venturous Buddy Books" gridListClassName="books-list" gridListTileClassName="mt-2" buttonClassName="books-preview" mediaItems={books} mediaCategories={booksCategories} mediaSubCategoryName={"Volume"} />
  )
}
