#Saskia Steyn u17267162

FROM node:20

WORKDIR /u17267162

COPY . . 

ENV PORT 3001

RUN npm install

CMD ["npm", "start"]

EXPOSE 3001