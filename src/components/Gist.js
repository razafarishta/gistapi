import styled from "styled-components";
import Octicon from "react-octicon";

const Gist = ({ gist }) => {
  return (
    <GistWrapper>
      <Row>
        <StartSlot>
          <Link href={gist.owner.url}>
            <Image src={gist.owner.avatar_url} alt={gist.owner.login} />
            {gist.owner.login}
          </Link>
        </StartSlot>
        <EndSlot>
          <Link>
            <Octicon name="code" /> {Object.keys(gist.files).length} Files
          </Link>
          <Link href={gist.forks_url}>
            <Octicon name="repo-forked" /> Forks
          </Link>
          <Link href={gist.comments_url}>
            <Octicon name="comment" /> Comments
          </Link>
          <Link href={gist.owner.starred_url}>
            <Octicon name="star" /> Stars
          </Link>
        </EndSlot>
      </Row>
      <Row>
        <StartSlot>
          <DateInfo>Created at: {gist.created_at}</DateInfo>
          <DateInfo>Updated at: {gist.updated_at}</DateInfo>
        </StartSlot>
      </Row>
      <Row>
        <Description>{gist.description}</Description>
      </Row>
      <Row>
        <Files>
          {Object.keys(gist.files).map((key) => (
            <FileLink key={key} href={gist.files[key].raw_url} title={key}>
              <Octicon name="file" />
              {key}
            </FileLink>
          ))}
        </Files>
      </Row>
    </GistWrapper>
  );
};

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const Files = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-flow: row wrap;
`;

const FileLink = styled.a`
  text-decoration: none;
  color: #3781dd;
  margin: 10px;
  display: flex;
  align-items: center;
  max-width: 100%;
`;

const StartSlot = styled.div`
  display: flex;
  align-self: flex-start;
`;

const EndSlot = styled.div`
  display: flex;
  align-self: flex-end;
  margin: 10px 10px 10px 10px;
`;

const DateInfo = styled.div`
  display: flex;
  margin: 10px 10px 0 0;
  font-size: 0.8em;
`;

const Description = styled.div`
  display: flex;
  margin: 10px 0;
  font-size: 1.2em;
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  margin-right: 5px;
`;

const Link = styled.a`
  text-decoration: none;
  color: #3781dd;
  margin-left: 5px;
  display: flex;
  align-items: center;
`;

const GistWrapper = styled.div`
  padding: 20px 0 20px;
  border-bottom: 1px solid #f2f3f4;
`;

export default Gist;
